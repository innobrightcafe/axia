import History from "../../ui/userdashboard/History/history";

 
const Investments = async () => {
  return (
    <div>
    <History tittle="Investment History" name="GOLD I" amount={`$ ${30000}`} date="12/1/2024" active="active"/>
  </div>
  );
};

export default Investments;
