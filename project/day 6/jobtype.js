// This function runs when the job type changes
function onJobTypeChange() {
    var jobType = document.getElementById('jobType').value;
    var salarySection = document.getElementById('salarySection');
    var turnoverSection = document.getElementById('turnoverSection');
    
    if (jobType === 'government') {
        salarySection.style.display = 'block';
        turnoverSection.style.display = 'none';
    } else if (jobType === 'business') {
        salarySection.style.display = 'none';
        turnoverSection.style.display = 'block';
    } else if (jobType === 'private') {
        salarySection.style.display = 'none';
        turnoverSection.style.display = 'none';
    }
}

// This function checks the loan eligibility
function checkEligibility() {
    var jobType = document.getElementById('jobType').value;
    var result = document.getElementById('result');
    result.innerHTML = '';

    if (jobType === 'government') {
        var salary = document.getElementById('salary').value;
        if (salary > 50000) {
            result.innerHTML = 'You can apply for a loan.';
        } else {
            result.innerHTML = 'You cannot apply for a loan.';
        }
    } else if (jobType === 'business') {
        var turnover = document.getElementById('turnover').value;
        if (turnover > 2000000) {
            result.innerHTML = 'You can apply for a loan.';
        } else {
            result.innerHTML = 'You cannot apply for a loan.';
        }
    } else if (jobType === 'private') {
        result.innerHTML = 'No loan available for you.';
    }
}

document.getElementById('jobType').addEventListener('change', onJobTypeChange);
document.getElementById('checkEligibilityButton').addEventListener('click', checkEligibility);
