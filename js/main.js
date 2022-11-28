


let ourSkills = document.querySelector(".our-skills");



window.onscroll = function() {

    let skillsOfsetTop = ourSkills.offsetTop

    let skillsHeight = ourSkills.offsetHeight

    let windowHeight = window.innerHeight

    let windowScrollTop = window.pageYOffset
    // // console.log(scrollY + " ===" + (ourSkillsTop - ourSkillsHeight));
    // console.log( window.innerHeight)
    // console.log(window.pageYOffset)
    
    if (windowScrollTop > skillsOfsetTop + skillsHeight - windowHeight ) {

        let progs = document.querySelectorAll(".our-skills .skills .prog-holder .prog span")

        progs.forEach((prog) => {
            prog.style.width = prog.dataset.max
            
            let count = setInterval(() => {
                prog.setAttribute("data-prog", prog.dataset.max)
                if (prog.dataset.prog == prog.dataset.max) {
                    clearInterval(count)
                }
            }, 400)

        })

    }
}










