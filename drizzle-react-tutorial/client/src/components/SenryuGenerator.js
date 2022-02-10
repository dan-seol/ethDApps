import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../state/senryuSlice'


export default function SenryuGenerator() {
    const dispatch = useDispatch()

    const handleGeneration = () => {
        let json = require('../data/grammar.json')
        let RiTa = require('rita')
        let grammar = RiTa.grammar(json)
        let result = grammar.expand()
        let lines = result.split("%");
        console.log(lines)
        dispatch(update({
            firstLine: lines[0],
            secondLine: lines[1],
            thirdLine: lines[2]
        }))
    }

    return (<button onClick={handleGeneration}>Generate</button>)
}