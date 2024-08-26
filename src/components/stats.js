import '../css/components/stats.css'
const Stats = function stats({packed}){
    const percent = 10;
    return(
        <div className='stats'>
            <h3>You already packed {packed}% of all item</h3>
        </div>
    );

}

export default Stats;