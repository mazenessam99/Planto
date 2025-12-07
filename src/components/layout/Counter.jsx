import Button from "../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { increase,decrease } from "../../store/counterSlice";
import { login,logout } from "../../store/AuthSlice";
const Counter = () => {
    const globalState = useSelector((state) => state);
    const dispatch = useDispatch();
    const isLoggedIn = () => {
        return globalState.auth.isLoggedIn
    }

    return (

        <div className="flex flex-col items-center justify-center gap-6 my-6">
            {isLoggedIn() &&(
                <>
                    <h2 className="text-center text-2xl mb-4 text-red-700">Counter:{globalState.counter.value}</h2>
                    <div className="flex flex-row gap-4">
                        <Button onClick={()=>dispatch(increase())}>Increase</Button>
                        <Button onClick={()=>dispatch(decrease())}>Decrease</Button>
                    </div>
                    
                </>)}
                <Button onClick={()=>dispatch(isLoggedIn() ? logout():login())}>{isLoggedIn() ? 'LogOut' : 'LogIn'}</Button>


        </div>
    )
}

export default Counter;