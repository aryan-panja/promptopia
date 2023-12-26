import React from 'react'
import Link from 'next/link'

const Form = ({
    type,
    post,
    setPost,
    submitting,
    setSubmitting,
    handleSubmit
}) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post</span>
            </h1>
            <p className='desc text-left max-w-md'>{type} and Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus provident aperiam quidem laborum nobis exercitationem dolorem possimus vitae dicta dignissimos asperiores cum, minima fuga at enim sequi sit doloremque?</p>

            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full flex-start flex-col'
            >
                <label>
                    <span className='font-satoshi font-semibold text-base text-grey-700'>
                        Your AI Prompt
                    </span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({...post, prompt: e.target.value})}
                        placeholder='Enter your prompt here...'
                        required
                        className='form_textarea'
                    />
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-grey-700'>
                        Tag <span className='font-normal'>(#product, #webdev)</span>
                    </span>

                    <input
                        value={post.tag}
                        onChange={(e) => setPost({...post, tag: e.target.value})}
                        placeholder='#tag'
                        required
                        className='form_input'
                    />
                </label>
                <div className='felx-end mx-3 mb-5 gap-4'>
                    <Link href={'/'} className='text-grey-500 text-sm'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
                    >
                        {submitting ? `${type}...`: type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form