import React, { Component } from 'react'
import '../scss/education/education.scss'
export class Education extends Component {
    render() {
        return (
            <div className="educationContainer">
                <p className="sectionHeader">Education</p>
                <div className="">
                    <span className="year">2019</span>
                    <p className="education">Tränarskolan 3 (Handboll)</p>
                </div>
                <div className="">
                    <span className="year">2014</span>
                    <p className="education">Tränarskolan 2 (Handboll)</p>
                </div>
                <div className="">
                    <span className="year">2012</span>
                    <p className="education">Tränarskolan 1 (Handboll)</p>
                </div>
                <div className="">
                    <span className="year">2011</span>
                    <p className="education">Handboll för barn baskurs</p>
                </div>
                <div className="">
                    <span className="year">2010</span>
                    <p className="education">Kommunikations kurs</p>
                </div>
                <div className="">
                    <span className="year">2006</span>
                    <p className="education">Språkstudier, Brighton</p>
                </div>
                <div className="">
                    <span className="year">2005</span>
                    <p className="education">Handels- och administration inriktning handboll, Farstagymnasium</p>
                </div>
            </div>
        )
    }
}

export default Education
