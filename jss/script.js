let x = document.querySelectorAll('.calculator_div_button')
let input = document.getElementById("calculator_div_input")
let plus = document.getElementById('plus')
let ccc = document.getElementById('ccc2')
ccc.addEventListener('click', function(){
	if(ccc)	{
		input.value = ccc.value
	}
})

let kkk = document.getElementById('kkk')
kkk.addEventListener('click', function(){
	input.value = eval(input.value)
})

let ddd = document.getElementById('ddd')
ddd.addEventListener('click', function(){
		input.value = input.value.slice(0,input.value.length-1)

	
})

for(let i = 0; i < x.length; i++){	
	x[i].addEventListener('click', function(){
let m = input.value.slice(input.value.length-1)

	


	if(m === '+' && (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/') ||
	 m === '-' && (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/')
	 || m === '*' && (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/')
	 || m === '/' && (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/')){
		input.value = input.value

	}else if(input.value.length === 0 && (this.value === '+' || this.value === '-' ||this.value === '*' || this.value === '/')){
		input.value = input.value
	}

	else{
		input.value+=this.value
		console.log(input.value.slice(input.value.length-1))
	}
})
}



// if(input.value += this.value){
	// 	plus.value == ''
	// }else{
	// 	plus.value == '+'
	// }