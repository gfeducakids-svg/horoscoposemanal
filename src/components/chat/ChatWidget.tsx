'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, X, Send, Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { chat } from '@/ai/flows/chat-flow';
type Message = {
  role: 'user' | 'model';
  content: string;
};
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'ready'>('connecting');
  const [peopleCount, setPeopleCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      setConnectionStatus('connecting');
      setPeopleCount(Math.floor(Math.random() * 15) + 1);
      const timer1 = setTimeout(() => {
        setConnectionStatus('connected');
        const timer2 = setTimeout(() => {
          setConnectionStatus('ready');
          setMessages([
            {
              role: 'model',
              content: 'Olá! Sou a Saturno, sua assistente virtual. Como posso te ajudar hoje? 😊',
            },
          ]);
        }, 1000);
        return () => clearTimeout(timer2);
      }, 3000);
      return () => clearTimeout(timer1);
    } else {
        setMessages([]);
        setInput('');
    }
  }, [isOpen]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    try {
        const historyForApi = [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: [{ text: msg.content }]
        }));
        
      const response = await chat({ history: historyForApi });
      
      const botMessage: Message = { role: 'model', content: response.message };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling chat flow:', error);
      const errorMessage: Message = {
        role: 'model',
        content: 'Desculpe, estou com um problema para me conectar. Tente novamente em alguns instantes.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 shadow-lg animate-pulse bg-vibrant-purple hover:bg-vibrant-purple/80"
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
        </Button>
      </div>
      <div
        className={cn(
          'fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm h-[600px] transition-transform duration-300 ease-in-out md:w-96',
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        )}
      >
        <Card className="h-full flex flex-col shadow-2xl bg-deep-purple border-vibrant-purple/50">
          <CardHeader className="flex flex-row items-center justify-between bg-vibrant-purple text-primary-foreground">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="https://i.imgur.com/3BoS5c5.png" alt="Saturno" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">Saturno</CardTitle>
                 <p className="text-xs text-primary-foreground/80">Respondendo a {peopleCount} pessoas</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-vibrant-purple/50" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {connectionStatus !== 'ready' ? (
                 <div className="flex flex-col items-center justify-center h-full text-white">
                    {connectionStatus === 'connecting' && <>
                        <Loader2 className="h-8 w-8 animate-spin text-soft-lilac" />
                        <p className="mt-2 text-sm text-slate-300">Conectando com o servidor...</p>
                    </>}
                    {connectionStatus === 'connected' && <>
                        <CheckCircle className="h-8 w-8 text-success-green" />
                        <p className="mt-2 text-sm text-slate-300">Conectado com sucesso! ✓</p>
                    </>}
                </div>
            ) : (
                <>
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={cn(
                        'flex items-end gap-2',
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                    >
                        {message.role === 'model' && (
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://i.imgur.com/3BoS5c5.png" alt="Saturno" />
                            <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        )}
                        <div
                        className={cn(
                            'rounded-lg px-4 py-2 max-w-[80%]',
                            message.role === 'user'
                            ? 'bg-vibrant-purple text-white'
                            : 'bg-cosmic-night text-slate-200'
                        )}
                        >
                        <p className="text-sm">{message.content}</p>
                        </div>
                    </div>
                    ))}
                    {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-8 w-8">
                        <AvatarImage src="https://i.imgur.com/3BoS5c5.png" alt="Saturno" />
                        <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg px-4 py-2 bg-cosmic-night flex items-center space-x-1">
                            <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse delay-0"></span>
                            <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                            <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                        </div>
                    </div>
                    )}
                    <div ref={messagesEndRef} />
                </>
            )}
          </CardContent>
          <div className="p-4 border-t border-vibrant-purple/30">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-cosmic-night border-vibrant-purple/50 text-white placeholder:text-slate-400"
                disabled={isLoading || connectionStatus !== 'ready'}
              />
              <Button type="submit" size="icon" disabled={isLoading || connectionStatus !== 'ready' || !input.trim()} className="bg-soft-lilac text-deep-purple hover:bg-soft-lilac/80">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
}
