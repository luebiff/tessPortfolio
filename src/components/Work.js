import React, { Component } from 'react'
import '../scss/work/work.scss'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
  
//   faHourglassStart, faHourglassEnd, faHourglass, faHourglassHalf
// } from "@fortawesome/free-solid-svg-icons";
export class Work extends Component {
    render() {
        return (
            <div className="workContainer">
                <p className="sectionHeader">Jobb</p>
                <div className="workCards">
                    <div className="workCard">
                        <div className="workCardInner">
                            <div className="cardFront">
                                <p className="work">SRV Återvinning, Administration</p>
                                <span className="date">2018</span>
                            </div>   
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>    
                            </div>  
                        </div>                                             
                    </div>
                    <div className="workCard">
                        <div className="workCardInner">
                            <div className="cardFront">
                                <p className="work">SRV Återvinning, Transportledare</p>
                                <span className="date">2015-2018</span>
                            </div>
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>                       
                    </div>
                    <div className="workCard">  
                    <div className="workCardInner">
                        <div className="cardFront">
                            <p className="work">
                            Poolia AB, Konsult/ Kundkommunikatör (SRV Återvinning AB)
                            </p>   
                            <span className="date">2014</span>
                        </div> 
                        <div className="cardBack">
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>                    
                           
                                            
                    </div>
                    <div className="workCard">  
                    <div className="workCardInner">
                        <div className="cardFront">
                                <p className="work">
                                Stockholms Kyrkogårdsförvaltning, Råcksta
                                Begravningsplats Trädgårdsmästare
                                </p>
                                <span className="date">2013-2014</span>
                            </div>
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>                                         
                    </div>
                    <div className="workCard">  
                        <div className="workCardInner">
                            <div className="cardFront">
                                <p className="work">Canon Svenska AB, Dispatcher/ Koordinator</p>    
                                <span className="date">2010-2013</span>
                            </div>
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>                                                                
                    </div>
                    <div className="workCard"> 
                        <div className="workCardInner">
                            <div className="cardFront">
                                <p className="work">Stockholmsbuketten AB, Florist</p>
                                <span className="date">2006-2010</span>
                            </div>
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div> 
                    </div>
                    <div className="workCard">  
                        <div className="workCardInner">
                            <div className="cardFront">
                                <p className="work">Florist praktikant, Blomsteraffär i Brighton</p>    
                                <span className="date">2005</span>
                            </div> 
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>                                        
                    </div>
                    <div className="workCard"> 
                        <div className="workCardInner">
                            <div className="cardFront">
                                <p className="work">
                                    Sommarjobb, Stockholms stadsledningskontor, Kontorsassistent
                                </p>  
                                <span className="date">2005, -06</span> 
                            </div> 
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>                     
                    </div>
                    <div className="workCard">  
                        <div className="workCardInner">
                            <div className="cardFront">
                                <p className="work">Florist praktikant, Stockholmsbuketten AB</p>
                                <span className="date">2004, -05, -06</span>
                            </div> 
                            <div className="cardBack">
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>               
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
