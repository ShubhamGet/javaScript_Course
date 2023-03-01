class RailwayForm{
    submit(){
        alert(this.name+ ": Your Form Submitted");
    }
    cancel(){
        alert(this.name+ ": Your Form Got Cancled");
    }
    fill(givenname){
        this.name=givenname
    }
}
let shubh=new RailwayForm()
shubh.fill("Shubham ")

let maan=new RailwayForm()
maan.fill("Maan Singh")

shubh.submit()
maan.submit()

maan.cancel()
