var Keys = Object.keys || objectKeys

module.exports = extend

function extend() {
    if(arguments[0] instanceof Array && arguments[1] === true)
        return recurse.apply(this,arguments[0]) 
    else
        return shallow.apply(this,arguments)
      
    function shallow () {
        var target = {}
        for (var i = 0; i < arguments.length; i++) {
            var source = arguments[i]

            if (!isObject(source)) {
                continue
            }

            var keys = Keys(source)

            for (var j = 0; j < keys.length; j++) {
                var name = keys[j]
                target[name] = source[name]
            }
        }
        return target
    }

    function recurse () {
        var rTarget = {}
        for(var i = 0; i < arguments.length; i++) {
            var source = arguments[i]

            if (!isObject(source)) {
               continue
            }

            var keys = Keys(source)

            for (var j = 0; j < keys.length; j++) {
              var name = keys[j]
              if(rTarget[name] === undefined)
                  rTarget[name] = source[name]
              else if(isObject(source[name]) && Object.keys(source[name]).length > 0)
                  rTarget[name] = recurse.apply(this,[rTarget[name],source[name]])
              else if(rTarget[name])
                  rTarget[name] = source[name]
              else
                  console.log("shouldn't happen?")
//                  rTarget[name] = shallow.apply(this,[rTarget[name],source[name]])
            }
        }       
        return rTarget    
    }
}

function objectKeys(obj) {
    var keys = []
    for (var k in obj) {
        keys.push(k)
    }
    return keys
}

function isObject(obj) {
    return obj !== null && typeof obj === "object"
}
