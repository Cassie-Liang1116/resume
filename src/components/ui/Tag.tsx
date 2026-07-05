type TagProps = {
  children: string;
};

const buttonConfig = '{"button": true, "cornerRadius": 24}';

export function Tag({ children }: TagProps) {
  return (
    <span className="glass muted-tag relative z-30" data-config={buttonConfig}>
      {children}
    </span>
  );
}
