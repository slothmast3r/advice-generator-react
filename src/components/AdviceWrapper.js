import {useEffect, useState} from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 1em;
  background: var(--grayish-blue);
  max-width: 20em;
`
const Header = styled.header`
  font-size: 0.5em;
  color: var(--neon-green);
  letter-spacing: 0.2em;
`

export default function AdviceWrapper(){
    const [adviceNumber, setAdviceNumber] = useState('#')
    const [adviceText, setAdviceText] = useState('')
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    function downloadAdvice(){
        setLoading(true)
        setError(false)
        fetch('https://api.adviceslip.com/advice')
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setData(data)
                setAdviceText(data.slip.advice)
                setLoading(false)
                setAdviceNumber(`#${data.slip.id}`)
            })
            .catch((error)=>{
                setLoading(false)
                setError(true)
                console.error(error)
            })
    }
    useEffect(()=>{
        downloadAdvice()
    }, [])
    function Loading(props) {
        const isLoading = props.isLoading;
        if (isLoading) {
            return <section  id="advice-text">LOADING</section>
        }
        return <section  id="advice-text">{adviceText}</section>
    }


    return (
        <Wrapper>
            <Header>
                ADVICE {adviceNumber}
            </Header>
            <Loading  isLoading={loading}>{adviceText}</Loading>
            <button onClick={downloadAdvice}>BUTTON</button>
        </Wrapper>
    )
}