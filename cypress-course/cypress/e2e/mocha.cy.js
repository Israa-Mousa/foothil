///<refrence type="cypress"/>

const { it } = require("mocha")




it("log some thing in cypress",function(){
 cy.log("I am in rummer")
})

it("test case2",(()=>{
 cy.log("iam inside test2 ")
}))