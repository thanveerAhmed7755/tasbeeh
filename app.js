const button = document.querySelectorAll('button');

button.forEach(function(ele) 
{
    ele.addEventListener("click", function() {
        if(this.id == 'subhanallah')
        {
            if(this.innerText >= 33)
            {
                this.innerText = this.innerText
            }
            else 
            {
                this.innerText = parseInt(this.innerText)+1;
            }
        }
        else if(this.id == 'alhamdulillah')
        {
            if(this.innerText >= 33)
            {
                this.innerText = this.innerText
            }
            else 
            {
                this.innerText = parseInt(this.innerText)+1;
            }
        }
        else 
        {
            if(this.innerText >= 34)
            {
                this.innerText = this.innerText
            }
            else 
            {
                this.innerText = parseInt(this.innerText)+1;
            }
        }
    })
})


let success = setInterval(() => 
{
    let isAll 
    button.forEach(function(ele)
    {
        isAll =  (ele.innerText == 34 || ele.innerText == 33)?true:false;
    })
    if(isAll)
    {
        clearInterval(success)
        setTimeout(() => 
        {

            document.querySelector('.container').style.display = 'none'
        },1000)
        setTimeout(() => {
            document.querySelector('.finalCongratulations h1').style.display = 'flex'
        },1100)
    }
},1000)