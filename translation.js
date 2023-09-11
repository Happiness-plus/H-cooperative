const plans = [
    [{name: 'Basic Plan', price: '$210 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=01ccf3e6c432d57c941712&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: 'Basic+', price: '$270 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=d25360826f12a5fe3d64d8&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: 'Silver Plan', price: '$240 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=ed6a1c4734ee89553c8adb&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: 'Silver+', price: '$300 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=d69961f9fe897ee98c0597&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: 'Gold Plan', price: '$300 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=142132c08db3e7320e3fdd&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: 'Gold+', price: '$360 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=e3b0488fb73e6303d09b68&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: 'Platinum Plan', price: '$360 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=764aac36a10d13334870e7&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: 'Platinum+', price: '$420 / Week', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=9a62fb0775a2bae94a809a&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}]
];

// Plan display functions
function showPlans(tier, color) {
  const planContainer = document.getElementById('plans');
  planContainer.innerHTML = '';
  plans[tier].forEach(plan => {
      const a = document.createElement('a');
      a.href = plan.url;
      a.className = 'plan-link';
      const div = document.createElement('div');
      div.className = 'plan';
      div.style.backgroundColor = color;
      div.innerHTML = `<h2>${plan.name}</h2><p>Price: ${plan.price}</p>`;
      a.appendChild(div);
      planContainer.appendChild(a);
  });
}

// Fade in/out functions
function fadeIn(element) {
  let opacity = 0;
  element.style.display = 'block';
  const timer = setInterval(() => {
      if (opacity >= 1) clearInterval(timer);
      element.style.opacity = opacity;
      opacity += 0.1;
  }, 50);
}

function fadeOut(element) {
  let opacity = 1;
  const timer = setInterval(() => {
      if (opacity <= 0) {
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = opacity;
      opacity -= 0.1;
  }, 50);
}

// Toggle display function
function toggleDisplay(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = element.style.display === 'none' || element.style.display === '' ? 'block' : 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Localizer click event
  document.getElementById('localizer').addEventListener('click', function () {
      const contentDiv = document.getElementById('subscription');
      contentDiv.style.display === 'none' || contentDiv.style.display === '' ? fadeIn(contentDiv) : fadeOut(contentDiv);
  });

  // Quote button click event
  document.getElementById('quotebutton').addEventListener('click', function () {
      toggleDisplay('Lquote');
  });

  // Team click event
  document.getElementById('team').addEventListener('click', function() {
      document.getElementById('lightbox').style.display = 'block';
  });

  // Close lightbox click event
  document.querySelector('.close-lightbox').addEventListener('click', function() {
      document.getElementById('lightbox').style.display = 'none';
  });

  // Button active state toggle
  const buttons = document.querySelectorAll('.interactive-btn');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => {
              btn.classList.remove('btn-success');
              btn.classList.add('btn-primary');
          });
          this.classList.remove('btn-primary');
          this.classList.add('btn-success');
      });
  });
});

// Close lightbox when clicked outside content
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('lightbox')) {
      document.getElementById('lightbox').style.display = 'none';
  }
});

  