//takes one argument at a time and returns a new function for each subsequent argument.

// Generlize function...
function mutiplication(x)
{
    return function(y)
    {
        return x*y
    }
}

const multiplyByTwo = mutiplication(2)
console.log('Result of Multiply By Two' , multiplyByTwo(3));

const multiplyByThree = mutiplication(3)
console.log('Result of Multiply By Three', multiplyByThree(4));

// Infinite currying...
function add(a)
{
    return function(b)
    {
        if(b)
        {
            return add(a+b)
        }
        return a
    }
}
console.log('Result of Addition' , add(1)(2)(3)());
