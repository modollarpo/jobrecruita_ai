// Auto-apply workflow queue stub
export class AutoApplyQueue {
  enqueue(candidateId: string, jobId: string) {
    // Add to queue for async processing
    return { candidateId, jobId, status: 'queued' };
  }
}
