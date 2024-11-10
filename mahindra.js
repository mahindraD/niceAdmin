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

sales_func(450);
revenue_func(180);
customer_func(789);
// recentActivity();

array = [{label:"7 min",content:"mumbai indians"},{label:"40 min",content:"csk"},{label:"2 days",content:"mumbai indians"},{label:"1 week",content:"csk"},{label:"4 weeks",content:"mumbai indians"}];
recentActivity_copy(array);

