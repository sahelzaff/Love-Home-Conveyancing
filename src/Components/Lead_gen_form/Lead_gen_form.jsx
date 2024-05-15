import React from 'react'
import './Lead_gen_form.css'

const Lead_gen_form = () => {
    return (
        <section className='lead_container' >
            <div className="bg-color">
                <div className="details">
                    <div className="left">
                        <h2 data-aos="fade-right" data-aos-once="true">Buying or selling?</h2>
                        <h2 className='white-text' data-aos="fade-right" data-aos-once="true">Let's make it happen</h2>
                        <p className="white-text" data-aos="fade" data-aos-once="true">Simply complete the details in <br />the form to speak with our property specialists</p>
                    </div>
                    <div className="right" data-aos="fade" data-aos-once="true">
                        <div className="grade">
                            <div className="lable-input">
                                <label htmlFor="">First Name *</label>
                                <input type="text" />
                            </div>
                            <div className="lable-input">
                                <label htmlFor="">Last Name *</label>
                                <input  type="text" />
                            </div>
                        </div>
                        <div className="grade">
                            <div className="lable-input">
                                <label htmlFor="">Email *</label>
                                <input  type="text" />
                            </div>
                            <div className="lable-input">
                                <label htmlFor="">Phone Number *</label>
                                <input type="integer" />
                            </div>
                        </div>

                        <div className="grade">
                            <div className="lable-input">
                                <label htmlFor="">How did you hear about us? *</label>
                                <select>
                                    <option value=""></option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        
                           
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Lead_gen_form
