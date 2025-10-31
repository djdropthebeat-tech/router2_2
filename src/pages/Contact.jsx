import React from 'react'
import './Contact.css'
import { useState } from 'react'
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 


export default function Contact() {

const [formData,setFormData] = useState({
  name:'',
  phone:'',
  email:'',
  message:'',
});


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Firebase Firestore에 데이터 저장
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      // 성공 메시지
      setSubmitStatus("success");
      alert("Thank you for your message! Your message has been saved.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      // 에러 처리
      console.error("Error saving contact:", error);
      setSubmitStatus("error");
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


const handleChange = (e) =>{
  setFormData({
    ...formData,
    [e.target.name] : e.target.value
    // <input name = 'email' /> formData.email 업데이트 하면
    // ...formData, 기존의 값 복사
    // e.target.value -> 키보드로 입력한 값
  });
}


  return (
    <div className='contact'>
      <h1>연락처</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>연락 정보</h2>
          <div className="info-item">
            <h3>📧 이메일</h3>
            <p>contact@reactapp.com</p>
          </div>
          <div className="info-item">
            <h3>📞 전화</h3>
            <p>02-1234-5678</p>
          </div>
          <div className="info-item">
            <h3>📍 주소</h3>
            <p>서울시 강남구 테헤란로 123</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>문의하기</h2>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">연락처</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">전송하기</button>
        </form>
      </div>
    </ div>
  )
}
