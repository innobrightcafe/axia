import { User } from "../model/user.js";
import { Package } from "../model/package.js";
import { validateAdmin } from "../middlewares/isAdmin.js";

export async function admin(req, res) {
  // declaration of input data 
  const email = req.body.email;
  const packageName = req.body.packageName;
  const ROI = req.body.ROI;
  const period = req.body.period;
  const description = req.body.description;
  const amount = req.body.amount;
  const pass = true;

  const dataPass =
    packageName && ROI && period && description && amount && pass;
  console.log("dataPass", dataPass);

  const adminData = {
    description,
    packageName,
    ROI,
    period,
    amount,
  };

  //set to default value if nothing was provided
  const validate = () => {
    if (dataPass === true) {
      return adminData;
    } else {
      return false;
    }
  };

  const data = validate();
  console.log("Filtered Data: ", data);

  // Call Admin validation function
  const adminValidate = await validateAdmin(email);
  const val = await User.find({ email });

  if (val.length > 0 && adminValidate && data !== false) {
    await Package.updateOne(
      { email },
      { $push: { investmentPackage: adminData } }
    );
    const packageData = await Package.findOne({ email });
    console.log(packageData);
    return res.send(packageData);
  }
  return res.send({ message: "No Admin Privileges" });
}
