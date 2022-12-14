import React from 'react'

const Table = ({handleClick, cells}) => {
    
const Cell = ({ num }) => {
    return <td onClick={() => 
        handleClick(num)}>{cells[num]}</td>
}

  return (
    <table className='font-effect-fire-animation'>
        <tbody>
            <tr>
                <Cell num={0} />
                <Cell num={1} />
                <Cell num={2} />
            </tr>
            <tr>
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
            </tr>
            <tr>
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
            </tr>
        </tbody>
    </table>
  )
}

export default Table