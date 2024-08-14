export default function Box(props: any){
    return(
        <div style={{ width: 500, height: 100, border: "1px solid black"}}>
            {props.render && props.render()}
            {props.children && props.children}
        </div>
    );
}
