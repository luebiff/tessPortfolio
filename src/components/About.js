import React, { Component } from 'react'
import '../scss/about/about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faUser, faFemale, faAt, faMapMarker, faHeart, faQuoteRight
     } from '@fortawesome/free-solid-svg-icons'

export class About extends Component {
    componentDidMount(){
        const ab = document.querySelector('.aboutContainer')
        console.log(window.scrollY)
        ab.addEventListener('scroll', (e) => {
                const scrollY = e.target.scrollTop;
                console.log(e.target.scrollTop)
                if( scrollY >= 5 && scrollY <= 15 ) { 
                    const x = document.querySelector('#one')
                    x.classList.add('line')
                } else if (scrollY >= 125 && scrollY <= 155){
                    const two = document.querySelector('#two')
                    two.classList.add('line2')
                    // console.log(two)
                    // console.log('2')
                } else if (scrollY >= 225 && scrollY <= 255){
                    const x = document.querySelector('#three')
                    x.classList.add('line')
                } else if (scrollY >= 325 && scrollY <= 355){
                    const x = document.querySelector('#four')
                    x.classList.add('line2')
                } else if (scrollY >= 425 && scrollY <= 455){
                    const x = document.querySelector('#five')
                    x.classList.add('line')
                } else if (scrollY >= 525 && scrollY <= 555){
                    const x = document.querySelector('#six')
                    x.classList.add('line2')
                } else if (scrollY >= 625 && scrollY <= 655){
                    const x = document.querySelector('#seven')
                    x.classList.add('line')
                } else if (scrollY >= 725 && scrollY <= 755){
                    const x = document.querySelector('#eight')
                    x.classList.add('line2')
                } else if (scrollY >= 825 && scrollY <= 855){
                    const x = document.querySelector('#nine')
                    x.classList.add('line')
                } else if (scrollY >= 925 && scrollY <= 955){
                    const x = document.querySelector('#ten')
                    x.classList.add('line2')
                } else if (scrollY >= 1025 && scrollY <= 1055){
                    const x = document.querySelector('#eleven')
                    x.classList.add('line')
                } else if (scrollY >= 1125 && scrollY <= 1155){
                    const x = document.querySelector('#twelve')
                    x.classList.add('line2')
                } 
                // console.log('scrolled')
            });
    }
    
    render() {
        return (
            <div className="aboutContainer">
                <p className="sectionHeader">Om Mig</p>
                <div className="infoContainer">
                   <div className="aboutInfo">
                        <div className="name">
                            <FontAwesomeIcon className="icon" icon={faFemale} />
                            <p>Therese Wiik Rydberg</p>
                        </div>
                        <div className="sNumber">
                            <FontAwesomeIcon className="icon" icon={faUser} />
                            <p>871203</p>
                        </div>                           
                        <div className="number">
                            <FontAwesomeIcon className="icon" icon={faMobile} />
                            <p>070-576 35 46</p>
                        </div>
                        <div className="email">
                            <FontAwesomeIcon className="icon" icon={faAt} />
                            <p>theresewr@gmail.com</p>
                        </div>
                        <div className="address">
                            <FontAwesomeIcon className="icon" icon={faMapMarker} />
                            <div>
                                <p>Britas Gränd 93</p>
                                <p>141 44 Huddinge</p>                                   
                            </div>
                        </div>
                        <div className="relationship">
                            <FontAwesomeIcon className="icon" icon={faHeart} />
                            <p>Sambo</p>
                        </div>
                   </div>
                   <div className="personalLetter">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi explicabo perferendis, expedita, veniam temporibus quia voluptate hic ex velit esse alias est molestiae autem sunt quos! Deleniti, ratione beatae. Hic.
                        In, ipsam. Dolorum laboriosam libero voluptatem eligendi ut consequuntur quam vitae dicta ipsam tenetur quo amet at officia exercitationem, alias fugiat nulla iusto reiciendis ex labore mollitia illum? Corporis, repudiandae?
                        Nesciunt nobis obcaecati accusamus, doloremque in dignissimos ducimus, beatae natus voluptatibus similique, vitae quae. Eum, modi rem. Vero nesciunt in vel, accusamus animi inventore commodi voluptates laudantium. Vel, cum soluta!
                        Qui, quaerat vitae aliquam sapiente amet saepe inventore pariatur sit repudiandae! Est, optio dolor soluta ipsa fugiat quae reiciendis recusandae at veniam eum numquam assumenda, nihil ut. Dolores, provident fugiat.
                   </div>
                </div>
                <div className="qualificationsContainer">
                    <p className="">Meriter</p>
                    <div className="qualifications">
                        <div className="qualification">
                            <div className="info">
                                <span className="year">2019</span>
                                <p className="qualiName">Handbollstränare, Huddinge Handbollklubb</p>
                            </div>
                            <div id="one"></div>
                        </div>
                        <div className="qualification2">
                            <div className="info">
                                <span className="year">2017</span>
                                <p className="qualiName">Förbundskapten / Handbollstränare, Stockholms distriktslag F02</p>
                            </div>
                            <div id="two"></div>
                        </div>
                        <div className="qualification">
                        <div className="info">
                            <span className="year">2018</span>
                            <p className="qualiName">Utbildningskommittén, Stockholms Handbollsförbund</p>
                        </div>                           
                            <div id="three"></div>
                        </div>
                        <div className="qualification2">
                        <div className="info">
                            <span className="year">2013</span>
                            <p className="qualiName">Förbundskapten/ Handbollstränare, Stockholms distriktslag F00</p>
                        </div>                           
                            <div id="four"></div>
                        </div>
                        <div className="qualification">
                        <div className="info">
                            <span className="year">2014</span>
                            <p className="qualiName">ADR kurs</p>
                        </div>                           
                            <div id="five"></div>
                        </div>
                        <div className="qualification2">
                        <div className="info">
                            <span className="year">2013</span>
                            <p className="qualiName">Förbundskapten/ Handbollstränare, Stockholms distriktslag, Damjuniorer</p>
                        </div>                            
                            <div id="six"></div>
                        </div>
                        <div className="qualification">
                        <div className="info">
                            <span className="year">2013</span>
                            <p className="qualiName">Förbundskapten/ Handbollstränare, Stockholms distriktslag F97</p>
                        </div>                            
                            <div id="seven"></div>
                        </div>
                        <div className="qualification2">
                        <div className="info">
                            <span className="year">2015</span>
                            <p className="qualiName">Handbollstränare, Skuru IK</p>
                        </div>                            
                            <div id="eight"></div>
                        </div>
                        <div className="qualification">
                        <div className="info">
                            <span className="year">2007</span>
                            <p className="qualiName">Körkort B</p>
                        </div>                           
                            <div id="nine"></div>
                        </div>
                        <div className="qualification2">
                        <div className="info">
                            <span className="year">2019</span>
                            <p className="qualiName">Handbollsspelare, Elitserien Skuru IK (Nacka)</p>
                        </div>                           
                            <div id="ten"></div>
                        </div>
                        <div className="qualification">
                        <div className="info">
                            <span className="year">2009</span>
                            <p className="qualiName">Handbollsspelare, Elitserien Skuru IK (Nacka)</p>
                        </div>                          
                            <div id="eleven" ></div>
                        </div>
                        <div className="qualification2">
                        <div className="info">
                            <span className="year">2005,06</span>
                            <p className="qualiName">Projektledare för handbollsturnering, Farsta Gymnasium</p>
                        </div>                 
                            <div id="twelve"></div>
                        </div>
    
                    </div>
                </div>
                <div className="referenceContainer">
                    <div className="reference">
                        <div className="txtCont">
                            <FontAwesomeIcon className="quote quoteStart" icon={faQuoteRight} />
                            <p className="refTxt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, distinctio reiciendis! Odit animi sapiente eveniet totam ducimus sunt et tempora.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure accusantium obcaecati alias consectetur veritatis expedita voluptatem quas, magnam quibusdam.
                            </p>
                            <FontAwesomeIcon className="quote quoteEnd" icon={faQuoteRight} />
                        </div>
                    
                        <div className="refCont">
                            <p className="position">Super boss</p>
                            <p className="compName">MTR</p>
                        </div>
                    </div>
                    <div className="reference">
                        <div className="txtCont">
                            <FontAwesomeIcon className="quote quoteStart" icon={faQuoteRight} />
                            <p className="refTxt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, distinctio reiciendis! Odit animi sapiente eveniet totam ducimus sunt et tempora.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure accusantium obcaecati alias consectetur veritatis expedita voluptatem quas, magnam quibusdam.
                            </p>
                            <FontAwesomeIcon className="quote quoteEnd" icon={faQuoteRight} />
                        </div>
                    
                        <div className="refCont">
                            <p className="position">Super boss</p>
                            <p className="compName">MTR</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default About
