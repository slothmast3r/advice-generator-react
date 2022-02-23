import {useState} from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 1em;
  min-height: 2em;
  min-width: 2em;
  background: var(--grayish-blue);
`

export default function AdviceWrapper(){
    const [adviceNumber, setAdviceNumber] = useState('#')
    const [adviceText, setAdviceText] = useState('')



    return (
        <Wrapper>
            <header>
                Advice {adviceNumber}
            </header>
            <section id="advice-text">{adviceText}</section>
        </Wrapper>
    )
}