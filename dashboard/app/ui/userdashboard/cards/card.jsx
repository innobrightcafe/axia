import React from 'react'

const Card = () => {
  return (
    <div class="balance-report__wrapper dashboard-single__box">
  <div class="balance-report">
    <div>
      <h4>€537,00</h4>
      <p class="secondary">Monthly Income</p>
    </div>
    <div class="dashboard-balance-report select">
      <select class="select-balance-report ms-sm-4">
        <option value="last">Last Month</option>
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
    </div>
  </div>
  <hr />
  <div class="group">
    <div class="group-inner">
      <p>Amount Invested</p>
      <h6>
        <img
          alt="Invested"
          srcset="
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvested.959fb382.png&amp;w=32&amp;q=75 1x,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvested.959fb382.png&amp;w=64&amp;q=75 2x
          "
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvested.959fb382.png&amp;w=64&amp;q=75"
          width="30"
          height="30"
          decoding="async"
          data-nimg="1"
          loading="lazy"
          style=""
        />€108.934,00
      </h6>
    </div>
    <div class="group-inner">
      <p>Total Earnings</p>
      <h6>
        <img
          alt="Earned"
          srcset="
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fearned.8368c7a9.png&amp;w=32&amp;q=75 1x,
            /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fearned.8368c7a9.png&amp;w=64&amp;q=75 2x
          "
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fearned.8368c7a9.png&amp;w=64&amp;q=75"
          width="30"
          height="30"
          decoding="async"
          data-nimg="1"
          loading="lazy"
          style="color: transparent"
        />€12.606,00
      </h6>
    </div>
  </div>
</div>

  )
}

export default Card
