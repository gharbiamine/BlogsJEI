import styles from "./drawer.module.css"
import Card from "../card/Card";
function Drawer(){
    return(
        <>
            <div className={styles.drawer}>
                <Card title="Forum Entreprise Insat" date="15-01-2022" category="projects" />
                <Card title="Lorem ipsum"/>
                <Card />
                <Card />
            </div>
        </>
    );
}
export default Drawer;