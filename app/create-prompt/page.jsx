'use client';

import {useState, useEffect} from "react"
import {useRouter} from "next/router"
import {useSession} from "next-auth/react"
import Form from '@components/Form'

const CreatePrompt = () => {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
    }


  return (
    <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        setSubmitting={setSubmitting}
        handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt