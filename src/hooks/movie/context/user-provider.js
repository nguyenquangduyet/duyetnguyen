import MovieContext from './index';
import PropTypes from 'prop-types';

const UserProfileProvider = (props) =>{
    const infoUser = {
        id :1,
        user:"admin",
        email:"admin@gmail.com",
        full_name:"Quang Duyet"
    }

    return(
        <MovieContext.Provider value={infoUser}>
            {props.children}
        </MovieContext.Provider>
    )

    UserProfileProvider.propTypes = {
        children: PropTypes.node.isRequired
    }
}
export default UserProfileProvider;