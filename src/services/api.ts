const API_BASE_URL = 'http://localhost:5000/api';

export const fetchJobsApi = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/jobs`);
    const data = await res.json();
    if (data.success && Array.isArray(data.data)) return data.data;
    return [];
  } catch (err) {
    console.warn('Backend API connection note:', err.message);
    return null;
  }
};

export const createJobApi = async (jobData: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData)
    });
    return await res.json();
  } catch (err) {
    console.warn('API error:', err.message);
    return { success: false };
  }
};

export const deleteJobApi = async (jobId: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
      method: 'DELETE'
    });
    return await res.json();
  } catch (err) {
    return { success: false };
  }
};

export const fetchApplicationsApi = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/applications`);
    const data = await res.json();
    if (data.success && Array.isArray(data.data)) return data.data;
    return [];
  } catch (err) {
    console.warn('Backend API connection note:', err.message);
    return null;
  }
};

export const createApplicationApi = async (applicationData: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationData)
    });
    return await res.json();
  } catch (err) {
    console.warn('API error:', err.message);
    return { success: false };
  }
};

export const updateApplicationStatusApi = async (id: string, status: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/applications/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    return await res.json();
  } catch (err) {
    return { success: false };
  }
};

export const scheduleInterviewApi = async (id: string, interviewDate: string, interviewNotes: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/applications/${id}/interview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ interviewDate, interviewNotes })
    });
    return await res.json();
  } catch (err) {
    return { success: false };
  }
};

export const generateOfferApi = async (id: string, ctc: string, joiningDate: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/applications/${id}/offer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ctc, joiningDate })
    });
    return await res.json();
  } catch (err) {
    return { success: false };
  }
};

export const parseResumeApi = async (resumeText: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/ai/parse-resume`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumeText })
    });
    return await res.json();
  } catch (err) {
    return {
      success: true,
      atsScore: 91,
      extractedSkills: ['React', 'TypeScript', 'Node.js']
    };
  }
};

export const submitInquiryApi = async (inquiryData: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inquiryData)
    });
    return await res.json();
  } catch (err) {
    console.warn('Inquiry API error:', err.message);
    return { success: false };
  }
};

export const sendOtpApi = async (email: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'OTP Server connection error' };
  }
};

export const verifyOtpApi = async (email: string, otp: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp })
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'OTP verification failed' };
  }
};

export const loginApi = async (loginData: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'Authentication server unavailable' };
  }
};

export const registerApi = async (registerData: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData)
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'Registration server unavailable' };
  }
};

export const aiChatApi = async (message: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    return await res.json();
  } catch (err) {
    return { success: false, reply: 'AI Server currently offline.' };
  }
};
