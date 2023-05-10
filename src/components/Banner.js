import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import programmer from '../assets/img/programmer.png';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Science Fresh Graduate", "Full-Stack Web Developer"];
    const [text, setText] = useState(''); // the current letters and the next one coming
    const [delta, setDelta] = useState(300-Math.random() * 100); // time transition from one letter to another
    const period = 2000; // time transition between each word

    useEffect(() => {
        let carousel = setInterval( () => {
            tick();
        }, delta)
        
        return () => { clearInterval(carousel) }; 
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(250);
        }
    }

    const handleButton1 = () => {
        window.open('https://www.linkedin.com/in/orvintritama', '_blank');
    };

    const handleButton2 = () => {
        window.open('https://www.github.com/orvintritama','_blank');
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>Hi I'm Orvin Tritama<br></br>A <span className='wrap'>{text}</span></h1>
                        <p>I recently graduated from The University of British Columbia, Okanagan Campus with a Major in Computer Science and a minor in Mathematics and Statistics. 
                            I love photography, coding, and sports! Scroll down to know more about me!</p>
                            
                        <div className='buttons'>
                            <button onClick={ handleButton1 }>Let’s Connect<ArrowRightCircle size={25} /></button>
                            <button onClick={ handleButton2 }>Find my work<ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <a href="http://www.freepik.com" target='blank'>
                            <img src={programmer} alt="Header" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;