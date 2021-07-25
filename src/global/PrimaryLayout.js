
// component
import Header from '../components/Header';

const PLayout = (props) =>{
    return(
        <div id="wrapper">
            <Header />
            
            {props.children}
        </div>
    )
}

export default PLayout;