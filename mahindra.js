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

sales_func(450);
revenue_func(180);
customer_func(789);
recentActivity();
