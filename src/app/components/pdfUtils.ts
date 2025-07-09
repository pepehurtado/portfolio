// Funciones alternativas para abrir PDFs en nueva pestaña

export const handleViewCV = () => {
  window.open("/Pepe_Hurtado_CV.pdf", "_blank");
};

export const handleViewPresentacion = () => {
  window.open("/Presentacion_TFG_Pepe_Hurtado.pdf", "_blank");
};

export const handleDownloadCV = async () => {
  try {
    const response = await fetch("/Pepe_Hurtado_CV.pdf");
    if (!response.ok) throw new Error("Archivo no encontrado");
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Pepe_Hurtado_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error:", error);
    // Fallback: abrir en nueva pestaña
    window.open("/Pepe_Hurtado_CV.pdf", "_blank");
  }
};

export const handleDownloadPresentacion = async () => {
  try {
    const response = await fetch("/Presentacion_TFG_Pepe_Hurtado.pdf");
    if (!response.ok) throw new Error("Archivo no encontrado");
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Presentacion_TFG_Pepe_Hurtado.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error:", error);
    // Fallback: abrir en nueva pestaña
    window.open("/Presentacion_TFG_Pepe_Hurtado.pdf", "_blank");
  }
};
