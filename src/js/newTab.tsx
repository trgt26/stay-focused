import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import dat from './data'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import styled from 'styled-components'
let d = Object.keys(dat.prgrmWebsites)
d = d.sort()
console.table(d)

const LinkGroup = styled.h1`
    background-color:black;
    font-size: 25px;
    color: white;
    text-align:center;
`
function Link( props ) {
    let  text = props.text
    let link = props.link
    return (
        <>
            <div>
                <a href={link} >{text}</a>
            </div>
        </>)
}

function Links( {info} ) {
    let data = info
    let keys = Object.keys(data)
    keys.sort()
    return (
        <div id="links">
            {keys.map((key)=>{
                return (<Link text={key} link={data[key]} />)
            })}
        </div>
    )
}
let prgrmWebIdx = 0;
function ProgrammingWebsites({total, info}) {
    let keys = Object.keys(info)
    keys.sort()
    if(total == -1) {
        keys = keys.slice(prgrmWebIdx)
    } else {
        keys = keys.slice(prgrmWebIdx, prgrmWebIdx+total);
    }
    prgrmWebIdx += total
    console.warn(prgrmWebIdx)
    let curr = {}
    keys.map((k) => {
        curr[k] = info[k]
    })
    console.warn(curr)
    return (
        <>
            <Links info={curr} />
        </>
    )
}

function Work() {
    return (
        <>
            <Row>
                <Col className='more'>
                    <LinkGroup> Work </LinkGroup> 
                    <Links info={dat.work} /> 
                </Col>
                <div className="col-4 ">
                    <LinkGroup>Github</LinkGroup>
                    <Links info={dat.github} />
                </div>
            </Row>
        </>
    )
}

function PrgrmWebsites() {
    return (
        <>
            <div className="special container-fluid mt-3">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <LinkGroup>Programming Websites</LinkGroup> 
                    <div className="col-3 ">
                        <ProgrammingWebsites info={dat.prgrmWebsites} total={25} />
                    </div>
                    <div className="col-3 ">
                        <ProgrammingWebsites info={dat.prgrmWebsites} total={25} />
                    </div>
                    <div className="col-3 ">
                        <ProgrammingWebsites info={dat.prgrmWebsites} total = {25} />
                    </div>
                    <div className="col-3 ">
                        <ProgrammingWebsites info={dat.prgrmWebsites} total={-1}/>
                    </div>
                </div>
            </div>
        </>
    )
}
function PrgrmSocial() {
    return (
        <>
            <div className="col-6 ">
                <LinkGroup>Programming Social</LinkGroup>
                <Links info={dat.prgrmSocial} />
            </div>
        </>
    )
}
ReactDOM.render(
<>
    <PrgrmWebsites />

    <PrgrmSocial />
    <Work />
    <div className="more container-fluid !direction !spacing text-center">
        <br/><br/>
        <Links info={dat.Porgramming} />
    </div>
    <div>
        <h3>Drive</h3>
        <Links info={dat.sepcialFour} />
    </div>

</>,
document.getElementById("root"))
