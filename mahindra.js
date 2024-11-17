function sales_func(val){
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
  if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector(".main .section .leftside .row");
  const template = document.querySelector("#sales_temp");
  // Clone the new row and insert it into the table
  const clone = template.content.cloneNode(true);
  let h=clone.querySelector(".ps-3 h6");
  h.innerText=val;
  
  tbody.appendChild(clone);

  } else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
  }
}

function revenue_func(val){
  // Test to see if the browser supports the HTML template element by checking
  // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const tbody = document.querySelector(".main .section .leftside .row");
    const template = document.querySelector("#revenue_temp");
    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    let h=clone.querySelector(".ps-3 h6");
    h.innerText=val;
    
    tbody.appendChild(clone);
  
    } else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
    }
}

function customer_func(val){
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
      if ("content" in document.createElement("template")) {
      // Instantiate the table with the existing HTML tbody
      // and the row with the template
      const tbody = document.querySelector(".main .section .leftside .row");
      const template = document.querySelector("#customer_temp");
      // Clone the new row and insert it into the table
      const clone = template.content.cloneNode(true);
      let h=clone.querySelector(".ps-3 h6");
      h.innerText=val;
      
      tbody.appendChild(clone);
    
      } else {
      // Find another way to add the rows to the table because
      // the HTML template element is not supported.
      }
}  

function recentActivity(){
      // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
      // Instantiate the table with the existing HTML tbody
      // and the row with the template
      const tbody = document.querySelector(".main .section .row .rightside");
      const template = document.querySelector("#recent_activity_temp");
      // Clone the new row and insert it into the table
      const clone = template.content.cloneNode(true);      
      tbody.appendChild(clone);
    
      } else {
      // Find another way to add the rows to the table because
      // the HTML template element is not supported.
      }
}

function recentActivity_copy(array){
  // Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector(".main .section .row .rightside");
  const template = document.querySelector("#recent_activity_copy_temp");
  // Clone the new row and insert it into the table
  const clone = template.content.cloneNode(true); 

  let icons = ["text-success","text-danger","text-primary","text-info","text-warning","text-muted"]
  let i=0;
  
  array.forEach(element => {
    const listBody = clone.querySelector(".card .card-body .activity");
    const tt = document.querySelector("#list");
    const cc = tt.content.cloneNode(true);
    cc.querySelector(".activity-item .activite-label").innerText=element.label;
    cc.querySelector(".activity-item .activity-content").innerText=element.content;
    cc.querySelector(".activity-badge").classList.add(icons[(i++)%6]);
    listBody.appendChild(cc);
  });

  tbody.appendChild(clone);
  } else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
  }
}

// sales_func(456);
// revenue_func(180);
// customer_func(789);
// recentActivity();

array = [{label:"7 min",content:"mumbai indians"},{label:"40 min",content:"csk"},{label:"2 days",content:"mumbai indians"},{label:"1 week",content:"csk"},{label:"4 weeks",content:"mumbai indians"}];
recentActivity_copy(array);


class SalesCard extends HTMLElement{
  constructor(){
    super();

    this.innerHTML=`
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Sales <span>| Today</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                      <h6>145</h6>
                      <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>

              </div>
      <!-- End Sales Card -->
    `
  }
}

class RevenueCard extends HTMLElement{
  constructor(){
    super();

    this.innerHTML=`

          <div class="card info-card revenue-card">

            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Revenue <span>| This Month</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-currency-dollar"></i>
                </div>
                <div class="ps-3">
                  <h6>$3,264</h6>
                  <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>
        </div><!-- End Revenue Card -->
    `
  }
}

class CustomerCard extends HTMLElement{
  constructor(){
    super();

    this.innerHTML=`
            <div class="card info-card customers-card">

          <div class="filter">
            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li class="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li><a class="dropdown-item" href="#">Today</a></li>
              <li><a class="dropdown-item" href="#">This Month</a></li>
              <li><a class="dropdown-item" href="#">This Year</a></li>
            </ul>
          </div>

          <div class="card-body">
            <h5 class="card-title">Customers <span>| This Year</span></h5>

            <div class="d-flex align-items-center">
              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i class="bi bi-people"></i>
              </div>
              <div class="ps-3">
                <h6>1244</h6>
                <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

              </div>
            </div>

          </div>
        </div>
    `
  }
}

customElements.define('sales-card',SalesCard);
customElements.define('revenue-card',RevenueCard);
customElements.define('customer-card',CustomerCard);
