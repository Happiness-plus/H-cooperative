const plans = [
    [{name: '1st Basic Plan', price: '$210', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=01ccf3e6c432d57c941712&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: '2nd Basic Plan', price: '$ 270', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=d25360826f12a5fe3d64d8&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: '1st Silver Plan', price: '$240', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=ed6a1c4734ee89553c8adb&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: '2nd Silver Plan', price: '$300', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=d69961f9fe897ee98c0597&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: '1st Gold Plan', price: '$300', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=142132c08db3e7320e3fdd&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: '2nd Gold Plan', price: '$360', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=e3b0488fb73e6303d09b68&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: '1st Platinum Plan', price: '$360', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=764aac36a10d13334870e7&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: '2nd Platinum Plan', price: '$420', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=9a62fb0775a2bae94a809a&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}]
];

function showPlans(tier, color) {
    const planContainer = document.getElementById('plans');
    planContainer.innerHTML = '';
    plans[tier].forEach(plan => {
        const a = document.createElement('a');
        a.href = plan.url; // URL of the plan
        a.className = 'plan-link';
        const div = document.createElement('div');
        div.className = 'plan';
        div.style.backgroundColor = color; // Set background color
        div.innerHTML = `<h2>${plan.name}</h2><p>Price: ${plan.price}</p>`;
        a.appendChild(div);
        planContainer.appendChild(a);
    });
}

// Default load for Tier 1
showPlans(0, 'white');

// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showDivButton').addEventListener('click', function () {
      var contentDiv = document.getElementById('subscription');
      if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
        fadeIn(contentDiv);
      } else {
        fadeOut(contentDiv);
      }
    });
  });
  
  function fadeIn(element) {
    var opacity = 0;
    element.style.display = 'block';
    var timer = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = opacity;
      opacity += 0.1;
    }, 50);
  }
  
  function fadeOut(element) {
    var opacity = 1;
    var timer = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = opacity;
      opacity -= 0.1;
    }, 50);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('quotebutton').addEventListener('click', function () {
      toggleDisplay('Lquote');
    });
  });
  
  function toggleDisplay(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = element.style.display === 'none' || element.style.display === '' ? 'block' : 'none';
  }
  
  