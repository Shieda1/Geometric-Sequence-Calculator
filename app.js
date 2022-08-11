// https://calculator.swiftutors.com/geometric-sequence-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const geometricSequenceRadio = document.getElementById('geometricSequenceRadio');
const firstTermRadio = document.getElementById('firstTermRadio');
const commonDifferenceRadio = document.getElementById('commonDifferenceRadio');
const nthTermRadio = document.getElementById('nthTermRadio');

let geometricSequence;
let firstTerm = v1;
let commonDifference = v2;
let nthTerm = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

geometricSequenceRadio.addEventListener('click', function() {
  variable1.textContent = '(a1) First Term';
  variable2.textContent = '(r) Common Difference';
  variable3.textContent = '(n) nth Term';
  firstTerm = v1;
  commonDifference = v2;
  nthTerm = v3;
  result.textContent = '';
});

firstTermRadio.addEventListener('click', function() {
  variable1.textContent = '(an) Geometric Sequence';
  variable2.textContent = '(r) Common Difference';
  variable3.textContent = '(n) nth Term';
  geometricSequence = v1;
  commonDifference = v2;
  nthTerm = v3;
  result.textContent = '';
});

commonDifferenceRadio.addEventListener('click', function() {
  variable1.textContent = '(an) Geometric Sequence';
  variable2.textContent = '(a1) First Term';
  variable3.textContent = '(n) nth Term';
  geometricSequence = v1;
  firstTerm = v2;
  nthTerm = v3;
  result.textContent = '';
});

nthTermRadio.addEventListener('click', function() {
  variable1.textContent = '(an) Geometric Sequence';
  variable2.textContent = '(a1) First Term';
  variable3.textContent = '(r) Common Difference';
  geometricSequence = v1;
  firstTerm = v2;
  commonDifference = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(geometricSequenceRadio.checked)
    result.textContent = `Geometric Sequence = ${computeGeometricSequence().toFixed(2)}`;

  else if(firstTermRadio.checked)
    result.textContent = `First Term = ${computeFirstTerm().toFixed(2)}`;

  else if(commonDifferenceRadio.checked)
    result.textContent = `Common Difference = ${computeCommonDifference().toFixed(2)}`;

  else if(nthTermRadio.checked)
    result.textContent = `nth Term = ${computenthTerm().toFixed(2)}`;
})

// calculation

function computeGeometricSequence() {
  return Number(firstTerm.value) * Math.pow(Number(commonDifference.value), Number(nthTerm.value) - 1);
}

function computeFirstTerm() {
  return Number(geometricSequence.value) / Math.pow(Number(commonDifference.value), Number(nthTerm.value) - 1);
}

function computeCommonDifference() {
  return Math.pow(Number(geometricSequence.value) / Number(firstTerm.value), 1 / (Number(nthTerm.value) - 1))
}

function computenthTerm() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}