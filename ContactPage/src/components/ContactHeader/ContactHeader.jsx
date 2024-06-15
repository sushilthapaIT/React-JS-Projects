import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum incidunt molestiae itaque, consectetur voluptas doloribus mollitia commodi. Repellat mollitia nemo numquam quasi atque accusantium error dicta, velit unde non?</p>
    </div>
  );
}

export default ContactHeader;
