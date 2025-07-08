import React, { useEffect, useState } from 'react';
import Editor from "@monaco-editor/react";
import axios from "axios";

const Judge0_Url = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true";

const Judge0_Languages = "https://judge0-ce.p.rapidapi.com/languages";

const headers = {
  'X-RapidAPI-Key': 'ea7986798amsh1b6a551d5c1891bp1ed4b2jsnfebb556c80c7',
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
  'Content-Type': 'application/json',
};

export default function IdeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [languageId, setLanguageId] = useState(102);
  const [editorLang, setEditorLang] = useState('');
  const [languageOptions, setLanguageOptions] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    axios.get(Judge0_Languages, { headers }).then((res) => {
      setLanguageOptions(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleRun = async () => {
    const encodedCode = btoa(code); // Base64 encode

    const payload = {
      source_code: encodedCode,
      language_id: languageId,
      base64_encoded: true,
      wait: true,
    };

    try {
      const response = await axios.post(Judge0_Url, payload, { headers });

      const { stdout, stderr, compile_output, status } = response.data;
      if (status.description !== "Accepted") {
        setOutput(atob(compile_output || '') || atob(stderr || '') || 'Error');
      } else {
        setOutput(atob(stdout || '') || 'No output');
      }
    } catch (err) {
      setOutput("Error running code");
      console.error(err);
    }
  };

  return (
    <div>
      <select
        name='languages'
        onChange={(e) => {
          const lang = languageOptions.find((l) => l.name === e.target.value);
          if (lang) {
            setLanguageId(lang.id);
            setEditorLang(lang.name);
          }
        }}
        value={editorLang}
      >
        <option value={languageId === 102 && 'JavaScript (Node.js 22.08.0)' || editorLang}>{editorLang || "JavaScript (Node.js 22.08.0)"}</option>
        {languageOptions.map((lang) => (
          <option key={lang.id} value={lang.name}>
            {lang.name}
          </option>
        ))}
      </select>

      <Editor
        height="400px"
        defaultLanguage={editorLang}
        language={editorLang}
        value={code}
        theme="vs-dark"
        onChange={(value) => setCode(value || '')}
      />
      <br />
      <button onClick={handleRun}>Run</button>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}
