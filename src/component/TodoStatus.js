function TodoStatus(){
    return(
        <section className="section">
            <div className="status-section">
                <div className="status-left">10개 남음</div>
                <div className="status-filter">
                    <button type="button" className="btn-all active">전체목록</button>
                    <button type="button" className="btn-left">남은목록</button>
                    <button type="button" className="btn-complete">완료목록</button>
                </div>
                <div className="status-clear">
                    <button type="button" className="btn-clear">완료목록삭제</button>
                </div>
            </div>
        </section>
    );
}

export default TodoStatus;