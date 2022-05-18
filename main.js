window.onload=()=>{
    class menuTab{
        constructor(id){
            
            this.selectIndex = 0;
            this.menuTab = document.querySelector(`#${id}`)
            this.menuTab.addEventListener("click",(e)=>{
                this.eventTab(e)
            })
            this.tabs = this.menuTab.querySelectorAll(".tabs>.tab")
            this.options = this.menuTab.querySelectorAll(".tabs-container>.tab-option")
            this.inicialisar()
        }
        activarTab(){
            this.tabs.forEach((tab,index)=>{
                if(index===this.selectIndex){
                    tab.classList.add("active")
                }
                else{
                    tab.classList.remove("active")
                }
            })
        }
        activarOption(){
            this.options.forEach((option,index)=>{
                if(index!==this.selectIndex){
                    option.classList.add("none")
                }
                else{
                    option.classList.remove("none")
                }
            })
        }
        inicialisar(){
            this.activarTab()
            this.activarOption()
        }
        eventTab(e){
            if(e.target.classList.contains("tab")){
                this.tabs.forEach((element,index)=>{
                    if(e.target===element){
                        this.selectIndex=index
                        this.tabs.forEach((tab,index)=>{
                            if(index===this.selectIndex){
                                tab.classList.add("active")
                            }
                            else{
                                tab.classList.remove("active")
                            }
                        })
    
                        this.options.forEach((option,index)=>{
                            if(index!==this.selectIndex){
                                option.classList.add("none")
                            }
                            else{
                                option.classList.remove("none")
                            }
                        })
    
                    }
                })
            }
        }
    }
    miMenuTab = new menuTab("menu-tab"); 
}