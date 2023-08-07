const plans = [
    [{name: '1st Plan', price: '$210', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=01ccf3e6c432d57c941712&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}, {name: '2nd Plan', price: '$ 270', url: 'https://h-cooperative.myhelcim.com/hosted/?token=770d9c83f82fa7bea3e5db&recurringPlan=d25360826f12a5fe3d64d8&amountHash=d45b57262725edae3aed936542ce65b797f973e5f5368c0562c18636f132be08'}],
    [{name: 'Plan 2A', price: '$20', url: 'link2A'}, {name: 'Plan 2B', price: '$25', url: 'link2B'}],
    [{name: 'Plan 3A', price: '$30', url: 'link3A'}, {name: 'Plan 3B', price: '$35', url: 'link3B'}],
    [{name: 'Plan 4A', price: '$40', url: 'link4A'}, {name: 'Plan 4B', price: '$45', url: 'link4B'}]
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
showPlans(0, '#FDF7C3');
