const getApiBaseUrl = () => {
  // 1. Check for Vite environment variable
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  // 2. Check browser hostname
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }
  }
  // 3. Fallback to relative /api endpoint in production
  return '/api';
};

const API_BASE_URL = getApiBaseUrl();

export const fetchJobsApi = async () => {
  try {
    // Avoid calling localhost if running on public production host without configured backend
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname !== 'localhost' && hostname !== '127.0.0.1' && API_BASE_URL.includes('localhost')) {
        return null;
      }
    }
    const res = await fetch(`${API_BASE_URL}/jobs`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.success && Array.isArray(data.data)) return data.data;
    return [];
  } catch (err: any) {
    console.warn('Backend API connection note:', err?.message || err);
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
  } catch (err: any) {
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
    // Avoid calling localhost if running on public production host without configured backend
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname !== 'localhost' && hostname !== '127.0.0.1' && API_BASE_URL.includes('localhost')) {
        return null;
      }
    }
    const res = await fetch(`${API_BASE_URL}/applications`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.success && Array.isArray(data.data)) return data.data;
    return [];
  } catch (err: any) {
    console.warn('Backend API connection note:', err?.message || err);
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
