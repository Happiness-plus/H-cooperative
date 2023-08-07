const plans = [
    [{name: '1st Plan', price: '$210', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=01ccf3e6c432d57c941712&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: '2nd Plan', price: '$ 270', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=d25360826f12a5fe3d64d8&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: 'Plan 2A', price: '$240', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=ed6a1c4734ee89553c8adb&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: 'Plan 2B', price: '$300', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=d69961f9fe897ee98c0597&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: 'Plan 3A', price: '$30', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=142132c08db3e7320e3fdd&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: 'Plan 3B', price: '$35', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=e3b0488fb73e6303d09b68&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: 'Plan 4A', price: '$40', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=764aac36a10d13334870e7&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: 'Plan 4B', price: '$45', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=9a62fb0775a2bae94a809a&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}]
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
