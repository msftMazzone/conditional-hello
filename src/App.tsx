import React from 'react';
import './App.css';

const App = () => (
  <>
    <header>
      {/* TODO: make "hello" animated change languages like Apple does */}
      <h1>Conditional hello</h1>
    </header>

    <main>
      <section>
        <h2>TL<span className='semicolon'>;</span>DR</h2>
        <p>
          Chat communication should be an efficient, asynchronous 
          exchange of information. Don&rsquo;t expect an answer if you just
          write “Hello” in chat. Instead, phrase a message that allows your
          chat partners to provide a meaningful response as soon as they
          allocate time to read and answer your message.
        </p>
        <p>
          But also remember that your co-workers are people. If you regularly
          ask someone for help or discuss work, consider asking how
          they&rsquo;re doing every now and then.
        </p>

        <h2>Chat Etiquette</h2>
        <h3>Not great</h3>
        <div className='well'>
          <p className='chatLine'><span className='chatName'>you:</span> Hello</p>
          <p className='chatLine'><span className='chatName'>co-worker:</span> hi</p>
          <p className='chatLine'># CO-WORKER WAITS WHILE YOU PHRASE YOUR QUESTION</p>
          <p className='chatLine'><span className='chatName'>you:</span> I'm working on [something] and I'm trying to do [etc...]</p>
          <p className='chatLine'><span className='chatName'>co-worker:</span> Oh, that's [answer...]</p>
        </div>
        <p>It&rsquo;s like calling someone and putting them on hold.</p>
        <p>Consider this instead.</p>

        <h3 className='pt-2'>Better</h3>
        <div className='well'>
          <p className='chatLine'><span className='chatName'>you:</span> Hi -- I'm working on [something] and I'm trying to do [etc...]</p>
          <p className='chatLine'><span className='chatName'>co-worker:</span> [answers question]</p>
        </div>
        <p>
          You get your answer quicker and your co-worker doesn't spend time
          waiting on your question.
        </p>
        <p>
          If that feels too brusque, then try throwing in regular conversation
          from time to time!
        </p>

        <h3 className='pt-2'>Maybe best</h3>
        <div className='well'>
          <p className='chatLine'><span className='chatName'>you:</span> Hi -- I'm working on [something] and I'm trying to do [etc...]</p>
          <p className='chatLine'><span className='chatName'>co-worker:</span> [answers question]</p>
          <p className='chatLine'><span className='chatName'>you:</span> Oh... nice! </p>
          <p className='chatLine'><span className='chatName'>you:</span> btw here's my puppy :)</p>
          <img src='./murph.png' alt='cute dachshund puppy' />
          <p className='chatLine'><span className='chatName'>co-worker:</span> Awwwww!</p>
        </div>
        <p>
          Sometimes it's better! But your co-workers understand that you don't
          always have to be friends and might be busy.
        </p>

        <p className='pt-5'>
          There is no best way to chat with your co-workers. While "hello" is
          likely worst if you have a question, that doesn't mean 100%
          efficiency is required all the time.
        </p>
      </section>
    </main>

    <footer>
      <p>
        Made with ❤️ and inspired by
        <a href='https://sbmueller.github.io/nohello/'> nohello </a>
        and 
        <a href='https://yeshello.org/'> yeshello</a>
      </p>
    </footer>
  </>
);

export default App;
