import { useAppSelector } from "hooks";
import ReactDOM from "react-dom";
import classes from "./LoadingModal.module.css";

const LoadingModal = () => {
    const isLoad = useAppSelector(state => state.loading.isLoading);
    const loadMsg = useAppSelector(state => state.loading.loadingMessage);

    let content = <div className={classes.backdrop}><div className={classes.message}>{loadMsg}</div></div>;

    if (!isLoad && loadMsg === "")
    {
        content = <></>;
    }

    const portalLoc = document.getElementById('loadMod') as Element;

    return ReactDOM.createPortal(content, portalLoc) ;
}

export default LoadingModal;
