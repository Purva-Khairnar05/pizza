function Contact() {
  return (
    <div>
      <h2>Contact 📞</h2>
 <a href="/">Home 🏠</a> <br />
       <hr />
 <form>
        <input type="text" placeholder="Enter your name" /><br /><br />
        <input type="email" placeholder="Enter your email" /><br /><br />
        <textarea placeholder="Your message"></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;