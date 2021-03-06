import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {

  it('should submit feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,sdsadas12312'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });  
  
  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,sdsadas12312'
    })).rejects.toThrow();
  });
  
  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: '',
      screenshot: 'data:image/png;base64,sdsadas12312'
    })).rejects.toThrow();
  });
  
  it('should be able to submit feedback without screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: ''
    })).resolves.not.toThrow();
  });
  
  it('should not be able to submit feedback with invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: '123456'
    })).rejects.toThrow();
  });

});
