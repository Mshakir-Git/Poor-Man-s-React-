        //only single statement(with return value) at a time
        //have to use getter function for state
        //Very inefficient DOM manupulation
        let baseHtml=""
        function update(){
            baseHtml=baseHtml?baseHtml:document.body.innerHTML
            
            let parsedHtml=baseHtml.replace("=&gt;","=>").replace(/#~([^~#]*)~#/g,(a,b)=>{
                return eval(b)
            })
            document.body.innerHTML=parsedHtml
        }
        function useState(init){
            let state=init

            const setState=(newState)=>{
                state=newState
                update()
            }

            const getState=()=>state
            return [getState,setState]

        }
        window.addEventListener("DOMContentLoaded",update,false)