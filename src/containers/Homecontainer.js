import {connect} from 'react-redux'
import Home from "../components/Home"; 
import {Like} from  '../services.jsx/Action/Action'


const mapDispatchToProps = dispatch=>({
    Likebtnhandler:data=>dispatch(Like)
})



// export default Home;