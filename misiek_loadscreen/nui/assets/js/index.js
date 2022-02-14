if(window.invokeNative) {
    window.onload = function()
    {
        document.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', (e) => {
                if (!window.invokeNative) return;
                e.preventDefault();
                window.invokeNative('openUrl', link.href);
            })
        })

        const cursor = document.getElementById("cursor");
        if(document.getElementById("cursor")) {
                document.body.addEventListener("mousemove", function(event){
                cursor.style.display = "";
                let x = event.pageX - 1 + "px"
                let y = event.pageY + "px"
                cursor.style.left = x;
                cursor.style.top = y;
            })
        }

    };
}